function hideThis (ele) {
    ele.css({
      display: 'none'
    })
  }

  function tabClick () {
    // hide all the content elements first
    nn.getAll('.skillscontent div').forEach(hideThis)
    // then show the one with matching data-cnt
    nn.get(this.data.cnt).css({
      display: 'flex', 
      justifyContent: 'spaceBetween',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      padding: '2%', 
      marginLeft: '1%', 
      marginRight: '1%', 
      marginTop: '-2px', 
      zIndex: '12', 
      borderRadius: '25px',
    })
  }
  
  function applyClicker (ele) {
    ele.on('mouseover', tabClick)
  }

  
  nn.getAll('.tab').forEach(applyClicker)