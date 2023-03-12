document.addEventListener('DOMContentLoaded', event => {
  navigator.usb.getDevices().then(devices => {
    devices.forEach(device => {
      console.log(`Device: ${device.productName} (vendor ID: ${device.vendorId}, product ID: ${device.productId})`);
    });
  }).catch(error => {
    console.log(error);
  });
  let button = document.getElementById('connect')
  let usbContent = document.getElementById('usb-content')

  button.addEventListener('click', async() => {
    let device
    try {
      device = await navigator.usb.requestDevice({
        filters: [{}]
      })

      console.log('open')
      await device.open()
      
      console.log('opened:', device)

      usbContent.innerHTML = 
      `
      <div class="device-info">
        <h2 class="apple-title">Device Information:</h2>
        <ul class="apple-list">
          <li><span class="apple-label">Manufacturer:</span> <div class="device-info-attribute"> ${device.manufacturerName}</div></li>
          <li><span class="apple-label">Product:</span> <div class="device-info-attribute"> ${device.productName}</div></li>
          <li><span class="apple-label">Serial Number:</span> <div class="device-info-attribute"> ${device.serialNumber}</div></li>
          <li><span class="apple-label">Vendor ID:</span> <div class="device-info-attribute"> ${device.vendorId}</div></li>
          <li><span class="apple-label">Product ID:</span> <div class="device-info-attribute"> ${device.productId} </div> </li>
        </ul>
      </div>
      `

    } catch (error) {
      console.log(error)
    }

    // listen to the input of device

	  await device.close()
  })
})

// const usb = require('usb');
// const devices = usb.getDeviceList();
// console.log(devices);




// node --experimental-modules index.js
