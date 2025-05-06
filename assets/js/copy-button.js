// markdown-copy-button.js
document.addEventListener('DOMContentLoaded', function() {
    let copiedIndex = null;
    
    // Function to process markdown and add copy buttons to code blocks
    const processMarkdown = () => {
      // Get all pre elements containing code blocks
      const codeBlocks = document.querySelectorAll('pre.highlight');
      
      codeBlocks.forEach((pre, index) => {
        // Get the code element
        const codeElement = pre.querySelector('code');
        if (!codeElement) return;
        
        // Get language class if it exists
        const languageClass = Array.from(codeElement.classList)
          .find(cls => cls.startsWith('language-'));
        const language = languageClass ? 
          languageClass.replace('language-', '') : '';
        
        // Get the code content
        const code = codeElement.textContent;
        
        // Create a wrapper div for positioning the button
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        
        // Wrap the pre element with our wrapper
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
        
        // Create copy button
        const button = document.createElement('button');
        button.setAttribute('title', 'Copy to clipboard');
        button.className = 'copy-button';
        button.style.position = 'absolute';
        button.style.top = '0.5rem';
        button.style.right = '0.5rem';
        button.style.padding = '0.25rem';
        button.style.borderRadius = '0.25rem';
        button.style.backgroundColor = '#374151'; // bg-gray-700
        button.style.color = '#d1d5db'; // text-gray-300
        button.style.transition = 'all 0.2s';
        button.style.border = 'none'; // Remove any border
        button.style.outline = 'none'; // Remove outline on focus
        button.style.zIndex = '10'; // Ensure button stays on top
        
        // Create clipboard icon
        const clipboardIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        clipboardIcon.setAttribute('width', '16');
        clipboardIcon.setAttribute('height', '16');
        clipboardIcon.setAttribute('viewBox', '0 0 24 24');
        clipboardIcon.setAttribute('fill', 'none');
        clipboardIcon.setAttribute('stroke', 'currentColor');
        clipboardIcon.setAttribute('stroke-width', '2');
        clipboardIcon.setAttribute('stroke-linecap', 'round');
        clipboardIcon.setAttribute('stroke-linejoin', 'round');
        
        // Clipboard icon path
        const clipboardPath1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        clipboardPath1.setAttribute('x', '9');
        clipboardPath1.setAttribute('y', '9');
        clipboardPath1.setAttribute('width', '13');
        clipboardPath1.setAttribute('height', '13');
        clipboardPath1.setAttribute('rx', '2');
        clipboardPath1.setAttribute('ry', '2');
        
        const clipboardPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        clipboardPath2.setAttribute('d', 'M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1');
        
        clipboardIcon.appendChild(clipboardPath1);
        clipboardIcon.appendChild(clipboardPath2);
        
        // Create check icon
        const checkIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        checkIcon.setAttribute('width', '16');
        checkIcon.setAttribute('height', '16');
        checkIcon.setAttribute('viewBox', '0 0 24 24');
        checkIcon.setAttribute('fill', 'none');
        checkIcon.setAttribute('stroke', 'currentColor');
        checkIcon.setAttribute('stroke-width', '2');
        checkIcon.setAttribute('stroke-linecap', 'round');
        checkIcon.setAttribute('stroke-linejoin', 'round');
        checkIcon.style.color = '#4ade80'; // text-green-400
        
        // Check icon path
        const checkPath = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        checkPath.setAttribute('points', '20 6 9 17 4 12');
        checkIcon.appendChild(checkPath);
        
        // Initially add clipboard icon
        button.appendChild(clipboardIcon);
        
        // Style the pre element to allow for absolute positioning
        pre.style.position = 'relative';
        pre.style.overflow = 'auto';
        pre.style.backgroundColor = '#1f2937'; // bg-gray-800
        pre.style.color = '#f3f4f6'; // text-gray-100
        pre.style.padding = '1rem'; // p-4
        pre.style.borderRadius = '0.375rem'; // rounded-md
        
        // Add copy button to wrapper (not to pre)
        wrapper.appendChild(button);
        
        // Add click event to button
        button.addEventListener('click', function(e) {
          // Prevent default behavior
          e.preventDefault();
          
          navigator.clipboard.writeText(code).then(function() {
            // Show check icon
            button.innerHTML = '';
            button.appendChild(checkIcon);
            
            // Reset after 2 seconds
            setTimeout(() => {
              button.innerHTML = '';
              button.appendChild(clipboardIcon);
            }, 2000);
          });
        });
        
        // Add hover styles
        button.addEventListener('mouseenter', function() {
          this.style.backgroundColor = '#4b5563'; // bg-gray-600
          this.style.color = '#ffffff'; // text-white
        });
        
        button.addEventListener('mouseleave', function() {
          this.style.backgroundColor = '#374151'; // bg-gray-700
          this.style.color = '#d1d5db'; // text-gray-300
        });
        
        // Remove focus outline and border
        button.addEventListener('focus', function() {
          this.style.outline = 'none';
          this.style.border = 'none';
          this.style.boxShadow = 'none';
        });
      });
    };
    
    // Run the process function
    processMarkdown();
  });