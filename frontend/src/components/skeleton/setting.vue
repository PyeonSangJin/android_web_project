<template>
<div class ="hello">

    <div>
      <label>색상 : </label>
        <input type="text" id="color" placeholder="색 펼치기"/><br>
        <label>색상 코드 : </label>
        <input type="text" v-model="background" placeholder="색상 코드를 입력해주세요."/><br><br><br>
    </div>

    <div v-for="(menu_info,i) in menu_infos" :key="i" @click="clickDiv(i)">
       
        <label>위치 : </label>
        <input type="text" v-model="menu_info.pos" placeholder="버튼 순서를 입력해주세요."><br>
        <label>URL : </label>
        <input type="text" v-model="menu_info.web_url" placeholder="게시판 주소를 입력해주세요."><br>
        <label>제목 : </label>
        <input type="text" v-model="menu_info.title" placeholder="버튼 제목을 입력해주세요."><br>

        <button @click="$refs.fileInput.click()">Pick File</button>
        <button @click="onUpload()">Upload</button><br>

    
        <i class="fa fa-plus-circle" @click="add(i)" v-show="i == menu_infos.length-1 && menu_infos.length < 3"></i>
        <i class="fa fa-minus-circle" @click="remove(i)" v-show="i || ( !i && menu_infos.length > 1)"></i>
     </div>

        <input style="display: none" type ="file" @change="onFileSelected" ref="fileInput">
 
  <div id="app">
    
  </div>
  <input type="button" class="btn btn-success"  value="전송" @click="transform"/>
  <p>{{background}}</p>
  <p>{{menu_infos}}</p>
  <p>{{json}}</p>
</div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'Aaa',
  data(){
    var nowPosition = 0;
    return{
        background:'',
        menu_infos:[{pos:'',icon_url:'',web_url:'',title:''}],
        json:[this.background,this.menu_infos],
        selectedFile: null
    }
  },
  mounted(){
      $(function(){$('#color').colorpicker()});
  },
  methods:{
    onFileSelected(event){
        this.selectedFile = event.target.files[0];
        if(this.selectedFile === null) {
            alert("이미지를 넣어주세요");
            return;
        }
     
        var fileNm = this.selectedFile.name;
     
        var ext = fileNm.slice(fileNm.lastIndexOf(".") + 1).toLowerCase();
 
        if (!(ext == "gif" || ext == "jpg" || ext == "png" || ext == "jpeg")) {
            alert("이미지파일 (.jpg, .png, .gif ) 만 업로드 가능합니다.");
            this.selectedFile=null;
            
            return;
        }
        this.menu_infos[this.nowPosition].icon_url=this.selectedFile;
        console.log(this.selectedFile);
    },
    onUpload(){
        const fd = new FormData();
        fd.append('image',this.selectedFile, this.selectedFile.name)
        axios.post('http://localhost:3001/api/files/upload',fd, {
        onUploadProgress: uploadEvent => {
        console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%')
        }
      })
      .then(res=>{
        console.log(res)
      })
    },
    transform()
    {
      this.json=[this.background,this.menu_infos]
    },
    add(index){
        this.menu_infos.push({pos:'',icon_url:'',web_url:'',title:''});
    },
    remove(index){
        this.menu_infos.splice(index,1);
    },
    clickDiv(index){
      this.nowPosition = index;
    }
  }
}

</script>