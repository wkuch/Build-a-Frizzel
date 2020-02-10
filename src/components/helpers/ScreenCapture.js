import html2canvas from 'html2canvas';

export const screenCapture = (toCaptureElement, handleScreenshot) => {
  // const body = document.querySelector('body')
    const body = toCaptureElement
    html2canvas(body).then(canvas => { 
      let croppedCanvas = document.createElement('canvas')
      let croppedCanvasContext = croppedCanvas.getContext('2d')
      const height = toCaptureElement.getBoundingClientRect().height
      const width = toCaptureElement.getBoundingClientRect().width
      console.log(toCaptureElement)
      console.log(toCaptureElement.getBoundingClientRect())
      console.log(toCaptureElement.getBoundingClientRect().width)
      console.log(toCaptureElement.getBoundingClientRect().height)

      croppedCanvas.width = width;
      croppedCanvas.height = height;

      croppedCanvasContext.drawImage(canvas, 10, 10, width, height, 0, 0, width, height);

      handleScreenshot(croppedCanvas.toDataURL())
    })
}