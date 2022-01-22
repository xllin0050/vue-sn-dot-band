<template>
  <div>
    <div class='cursor1 hidden sm:block'></div>
	  <div class='cursor2 hidden sm:block' :class="{hover: hoverShow}"></div>
  </div>
</template>

<script>
export default {
  data (){
    return{
      hoverShow: false,
      targetEls: []
    }
  },
  mounted (){
    // let targets = document.querySelectorAll(".hover-target")
    // let targetArr = [...targets]

    // targetArr.forEach((targetSingle)=>{
    //   this.targetEls.push(targetSingle)
    // })

    // this.targetEls.forEach((e)=>{
    //   e.addEventListener('mouseover', this.showHover)
    //   e.addEventListener('mouseout', this.showHover)
    // })

    document.querySelector("#app").addEventListener('mousemove', function(event){
        document.querySelector(".cursor1").style.top = event.clientY + "px"
        document.querySelector(".cursor1").style.left = event.clientX + "px"
        document.querySelector(".cursor2").style.top = event.clientY + "px"
        document.querySelector(".cursor2").style.left = event.clientX + "px"
    });
  },

  methods:{
    showHover(){
      this.hoverShow = !this.hoverShow
    }

  }
}
</script>

<style>
.cursor1, .cursor2{
  position: fixed;
  border-radius: 50%;	
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  left: -50px;
  top: 50%;
  mix-blend-mode: difference;
  -webkit-transition: all 450ms linear;
  transition: all 450ms linear;
  transition-property: left, top;

}

/* .cursor1{
  background-color: #fff;
	height: 0;
	width: 0;
	z-index: 99999;
} */

.cursor2{
  height: 30px;
	width: 30px;
	z-index:99998;
	/* -webkit-transition: transform 300ms ease-out;
	transition: transform 300ms ease-out */
}

.cursor2.hover{
	/* -webkit-transform:scale(2) translateX(-25%) translateY(-25%);
	transform:scale(2) translateX(-25%) translateY(-25%);
	border:none */
}

.cursor2{
  border: 2px solid #fff;
	box-shadow: 0 0 22px rgba(255, 255, 255, 0.6);

}
.cursor2 .hover{
  /* background: rgba(255,255,255,1);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.2); */
}
</style>