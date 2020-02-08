import html2canvas from 'html2canvas';

export const screenCapture = (handleScreenshot) => {
  const body = document.querySelector('body')

    html2canvas(body).then(canvas => { 
      let croppedCanvas = document.createElement('canvas')
      let croppedCanvasContext = croppedCanvas.getContext('2d')
      const height = 400
      const width = 400

      croppedCanvas.width = width;
      croppedCanvas.height = height;

      croppedCanvasContext.drawImage(canvas, 10, 10, width, height, 0, 0, width, height);

      handleScreenshot(croppedCanvas.toDataURL())
    })
}