const buttons = document.querySelectorAll('button');
const frameContainer = document.getElementById('frame-container');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const frameName = button.getAttribute('data-frame');

    // Clear existing frame content
    frameContainer.innerHTML = ''; 

    // Create and append the new frame content
    const newFrame = document.createElement('div');
    newFrame.id = frameName; 

    // Add specific content to each frame
    if (frameName === 'frame1') {
      newFrame.innerHTML = `
        <h2>Frame 1 Content</h2>
        <p>This is the content for Frame 1.</p>
      `;
    } else if (frameName === 'frame2') {
      newFrame.innerHTML = `
        <h2>Frame 2 Content</h2>
        <p>This is the content for Frame 2.</p>
      `;
    } else if (frameName === 'frame3') {
      newFrame.innerHTML = `
        <h2>Frame 3 Content</h2>
        <p>This is the content for Frame 3.</p>
      `;
    } else if (frameName === 'frame4') {
      newFrame.innerHTML = `
        <h2>Frame 4 Content</h2>
        <p>This is the content for Frame 4.</p>
      `;
    }

    frameContainer.appendChild(newFrame);
  });
});