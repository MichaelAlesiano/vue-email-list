var app = new Vue({
  el : "#app",
  data : {
    mailList : []
  },

  mounted(){
    for ( let i = 0; i < 10; i++ ){
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) => {
          console.log(result);
          this.mailList.push(result.data.response);
      });

    }
  }

});
