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
      display: 'flex', border: '2px solid',padding: '20px', marginLeft: '1%', marginRight: '1%', marginTop: '-2px', zIndex: '12', borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px',
      borderTopRightRadius: '25px',
    })
  }
  
  function applyClicker (ele) {
    ele.on('mouseover', tabClick)
  }

  
  nn.getAll('.tab').forEach(applyClicker)