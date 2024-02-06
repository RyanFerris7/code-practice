document.addEventListener('DOMContentLoaded', function() {
    const shapeContainer = document.getElementById('shape-container');
    const shape = document.getElementById('shape');
    const text = document.getElementById('text');
    let isCircle = true;
  
    const toggleShape = new mojs.Tween({
      targets: shape,
      duration: 300,
      easing: 'quad.out',
      onUpdate: function(progress) {
        const borderRadius = isCircle ? 50 * (1 - progress) : 50 * progress;
        shape.style.borderRadius = `${borderRadius}%`;
      },
      onComplete: function() {
        isCircle = !isCircle;
        if (!isCircle) {
          text.style.opacity = 1;
        } else {
          text.style.opacity = 0;
        }
      }
    });
  
    const scaleUp = new mojs.Tween({
      targets: shape,
      scale: { value: 1, to: 1.5 },
      duration: 100,
      easing: 'quad.out'
    });
  
    shapeContainer.addEventListener('click', function() {
      toggleShape.replay();
      scaleUp.replay();
    });
  });
  