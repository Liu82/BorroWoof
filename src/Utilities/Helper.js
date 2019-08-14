module.exports = {
  getLocalValues: function (){
    return {
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        zipcode: localStorage.getItem('zipcode'),
        isLoggedIn: false,
        image: localStorage.getItem('image'),
        ownerId: localStorage.getItem('ownerId'),
        userId: localStorage.getItem('userId'),
        about: localStorage.getItem('about'),
        userToken: localStorage.getItem('userToken'),
    }
    } 
}
