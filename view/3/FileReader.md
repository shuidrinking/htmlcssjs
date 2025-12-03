#### FileReader读取文件的API

用于上传图片预览等场景

>1、利用file类型的input读取为base64
<pre class="prettyprint lang-javascript">
//html部分代码样例
&lt;input type="file" style="display:none;" id="custIconFile" accept=".png,.jpg,.jpeg,.webp,.svg" onchange="showCustIcon(this);"/&gt;

//js部分代码样例
function showCustIcon(_file){
	let reader= new FileReader();
	reader.onload = function(e) {
		let base64Code=this.result;
		let _previewDiv=document.querySelector("#someDiv");
		_previewDiv.style.backgroundImage='url("'+base64Code+'")';
	};
	reader.readAsDataURL(_file.files[0]);
}
</pre>

>2、读取文本内容
<pre class="prettyprint lang-javascript">
//将上面的readAsDataURL换为readAsText，即可读取原始内容，例如读取svg文件的原始内容
let reader= new FileReader();
reader.onload = function(e) {
	let textContent=this.result;
};
reader.readAsText(_file.files[0]);
</pre>