function hideThis (ele) {
    ele.css({
      maxHeight: '0px',
      opacity: '0',
      padding: '0%',
    })
  }

  function tabClick () {
    // hide all the content elements first
    nn.getAll('.skillscontent div').forEach(hideThis)
    // then show the one with matching data-cnt
    nn.get(this.data.cnt).css({
      maxHeight: '400px', 
      opacity: '1',
      padding: '2%',
    })
  }
  
  function applyClicker (ele) {
    ele.on('mouseover', tabClick)
  }

  
  nn.getAll('.tab').forEach(applyClicker)