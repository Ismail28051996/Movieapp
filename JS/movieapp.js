Vue.component('movie-detail',{
	props:['movie'],
	template:`
	<div>{{movie.Title}}</div>
	`
});
new Vue({
	el:"#mymovieapp",
	data:{
		searchKey:'',
		movieList:[]
	},
	methods:{
		searchMovies(){
			var url='http://www.omdbapi.com/?s='+this.searchKey+'&apikey=e0620bd4';
			fetch(url)
			.then(response=>response.json)
			.then(data=>{
				this.movieList=data;
			})
		}
		}
	})
