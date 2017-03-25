module.exports = {
    button: function(req, res) {
        if (req.body.down) {
            console.log('its down')
        }
        if(req.body.up) {
            console.log('its up, oh lala ')
        }
    }
}