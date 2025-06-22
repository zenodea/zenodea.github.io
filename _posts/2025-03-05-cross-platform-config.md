---
title: "Cross Platform Config Manager (No Nix)"
last_modified_at: 2025-05-03T14:30:45+00:00
categories: 
- configurations
published: true
---
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>


<link rel="stylesheet" type="text/css" href="http://tikzjax.com/v1/fonts.css">
<script src="https://tikzjax.com/v1/tikzjax.js"></script>

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [['$','$'], ['\\(','\\)']],
      displayMath: [['$$','$$'], ['\\[','\\]']],
      processEscapes: true
    },
    TeX: {
      equationNumbers: { autoNumber: "AMS" }
    }
  });
</script>
<script src="{{ '/assets/js/copy-button.js' | relative_url }}"></script>
# Introduction
This is a short write-up on dotfiles management for developers working across multiple machines (different operating systems (OS)). Dotfiles are configuration files that customize your development environment, and, when building a dotfiles system, we need to handle OS differences and ensure consistency across machines.

# Dotfiles Management
Generally, dotfiles management systems require two properties to be useful:

**Consistency**: Your configurations should work the same way across different machines.

**Portability**: Your setup should work across different operating systems without manual tweaking.

A dotfiles system requires both properties. A simple approach would be to copy and paste config files from an external backup (i.e. a github repository), but this can be tiring, and maintaining the dotifles themselves can become annoying. As such, symlinking copies configuration files to their target locations, and allows us to modify dotfiles directly from the dotfile folder, simplyfying git versioning.  

## File Structure 

We can organize configs by specificity. We have two main way to differentiate a config folder/file. General dotfiles are configurations that are OS-agnostic, meaning that they may work on both platforms. For example, my neovim configurations do not have any OS-specific features, thus, my linux machine and macos machine both share the same configuraitons. OS-specific configurations, instead, represent configuration files unique to that platform.

The script processes OS-specific configs first, then general configs. This allows general configs to override OS-specific ones where conflicts exist.

```bash
# Process OS-specific dotfiles first
create_config_symlinks "$DOTFILES_DIR"
create_home_symlinks "$DOTFILES_DIR"

# Then process general dotfiles
create_config_symlinks "$GENERAL_DIR" 
create_home_symlinks "$GENERAL_DIR"
```

The directory structure:

```
~/Documents/dotFiles/
├── general/
│   └── package_A_config/
├── linux/
│   └── package_B_config/
└── mac/
│   └── package_C_config/
```

## OS Detection

The script detects the operating system:

```bash
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  OS_DIR="linux"
elif [[ "$OSTYPE" == "darwin"* ]]; then
  OS_DIR="mac"
else
  OS_DIR="mac"
fi
```

This allows the same script to work on different platforms.

## Symlink Management

The script creates symbolic links from target locations to the repository. Before creating each symlink, it removes any existing file:

```bash
if [ -e "$CONFIG_DIR/$folder_name" ]; then
  rm -rf "$CONFIG_DIR/$folder_name"
fi
ln -sf "$folder" "$CONFIG_DIR/$folder_name"
```


## Configuration Types

The script handles two types of configurations:

**Config directories**: Applications store configs in `~/.config/`. These are handled by `create_config_symlinks()`.

**Dotfiles**: Traditional dotfiles like `.bashrc` and `.vimrc` go in the home directory. These are handled by `create_home_symlinks()`.

Config directories are entire folders, while dotfiles are individual files.

## Functions

```bash
create_config_symlinks() {
  local source_dir=$1
  if [ ! -d "$source_dir" ]; then
    return
  fi
  
  for folder in $(find "$source_dir" -maxdepth 1 -type d -not -path "$source_dir"); do
    folder_name=$(basename "$folder")
    if [[ "$folder_name" != .* ]]; then
      if [ -e "$CONFIG_DIR/$folder_name" ]; then
        rm -rf "$CONFIG_DIR/$folder_name"
      fi
      ln -sf "$folder" "$CONFIG_DIR/$folder_name"
    fi
  done
}

create_home_symlinks() {
  local source_dir=$1
  if [ ! -d "$source_dir" ]; then
    return
  fi
  
  for file in $(find "$source_dir" -maxdepth 1 -type f -name ".*"); do
    file_name=$(basename "$file")
    if [ -e "$HOME/$file_name" ]; then
      rm -f "$HOME/$file_name"
    fi
    ln -sf "$file" "$HOME/$file_name"
  fi
}
```

## Deployment Process

The deployment follows these steps:

1. Detect OS and set directory paths
2. Create ~/.config if it doesn't exist
3. Check directory existence 
4. Process OS-specific configs first
5. Process general configs to override where needed

The script is **idempotent**, meaning that it can be run multiple times safely. Symbolic links maintain a live connection to your repository, so changes are immediately reflected.

# Full Script
```bash
#!/bin/bash

# Detect operating system and set the source directory accordingly
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  OS_DIR="linux"
  echo "Linux detected, using linux configuration."
elif [[ "$OSTYPE" == "darwin"* ]]; then
  OS_DIR="mac"
  echo "macOS detected, using mac configuration."
else
  echo "Unknown operating system. Defaulting to mac configuration."
  OS_DIR="mac"
fi

# Define source directories
DOTFILES_DIR="$HOME/Documents/dotFiles/$OS_DIR"
GENERAL_DIR="$HOME/Documents/dotFiles/general"
CONFIG_DIR="$HOME/.config"

# Create .config directory if it doesn't exist
mkdir -p "$CONFIG_DIR"

# Check if OS-specific dotfiles directory exists
if [ ! -d "$DOTFILES_DIR" ]; then
  echo "Warning: OS-specific dotfiles directory $DOTFILES_DIR does not exist."
fi

# Check if general dotfiles directory exists
if [ ! -d "$GENERAL_DIR" ]; then
  echo "Warning: General dotfiles directory $GENERAL_DIR does not exist."
fi

# Function to create symlinks for config folders
create_config_symlinks() {
  local source_dir=$1

  if [ ! -d "$source_dir" ]; then
    return
  fi

  echo "Creating symlinks for config folders from $source_dir..."

  # Loop through all directories in the source directory
  for folder in $(find "$source_dir" -maxdepth 1 -type d -not -path "$source_dir"); do
    folder_name=$(basename "$folder")

    # Skip hidden directories (those starting with .)
    if [[ "$folder_name" != .* ]]; then
      # Remove existing destination if it exists
      if [ -e "$CONFIG_DIR/$folder_name" ]; then
        echo "Removing existing $CONFIG_DIR/$folder_name"
        rm -rf "$CONFIG_DIR/$folder_name"
      fi

      # Create symlink
      echo "Creating symlink: $CONFIG_DIR/$folder_name -> $folder"
      ln -sf "$folder" "$CONFIG_DIR/$folder_name"
    fi
  done
}

# Function to create symlinks for home directory files (dotfiles)
create_home_symlinks() {
  local source_dir=$1

  if [ ! -d "$source_dir" ]; then
    return
  fi

  echo "Creating symlinks for home directory files from $source_dir..."

  # Loop through all hidden files in the source directory
  for file in $(find "$source_dir" -maxdepth 1 -type f -name ".*"); do
    file_name=$(basename "$file")

    # Remove existing destination if it exists
    if [ -e "$HOME/$file_name" ]; then
      echo "Removing existing $HOME/$file_name"
      rm -f "$HOME/$file_name"
    fi

    # Create symlink
    echo "Creating symlink: $HOME/$file_name -> $file"
    ln -sf "$file" "$HOME/$file_name"
  done
}

# Process OS-specific dotfiles first
create_config_symlinks "$DOTFILES_DIR"
create_home_symlinks "$DOTFILES_DIR"

# Then process general dotfiles (these will override OS-specific ones if there are conflicts)
create_config_symlinks "$GENERAL_DIR"
create_home_symlinks "$GENERAL_DIR"

echo "Symlinks created successfully!"
```
<style>
svg [stroke="rgb(0%, 0%, 0%)"], svg [fill="rgb(0%, 0%, 0%)"] {
    fill: white !important;
    stroke: white!important;

}

  .svg-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .responsive-svg {
    min-width: 70%;
    height: auto;
  }
  
  .inverted {
    filter: invert(100%);
  }
</style>


 


