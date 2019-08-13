module.exports = {
  getLocalValues: function (){
    return {
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        zipcode: localStorage.getItem('zipcode'),
        isLoggedIn: false,

        image: localStorage.getItem('image'),
        ownerId: localStorage.getItem('ownerID'),
        userId: localStorage.getItem('userId'),
        userToken: localStorage.getItem('userToken'),
    }
    } 
}
