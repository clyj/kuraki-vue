<template>
	<div class="text-editor">
		<el-row >
			<el-col :xs="{span: 22, offset: 1}" :sm="{span:20,offset:2}" :md="{span:16,offset:4}">
				233
				 <editor id='tinymce' v-model='tinymceHtml' :init='init'></editor>
			</el-col>
		</el-row>
	</div>
</template>

<script >
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/modern/theme'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
export default {
  name: 'tinymce',
  data () {
    return {
      tinymceHtml: '',
      init: {
        language_url: '/static/tinymce/langs/zh_CN.GB2312.js',
        language: 'zh_CN.GB2312',
        skin_url: '/static/tinymce/skins/lightgray',
        height: 300,
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
        toolbar:
          'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
        branding: false
      }
    }
  },
  mounted () {
    tinymce.init({})
  },
  components: {Editor}
}
</script>