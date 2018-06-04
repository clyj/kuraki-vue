<style lang="less">
	@import 'markdown-editor.less';
</style>

<template>
	<div class="markdown-editor">
		<el-row >
			<el-col :xs="{span: 22, offset: 1}" :sm="{span:20,offset:2}" :md="{span:16,offset:4}">
		  		<mavon-editor style="height:600px" :ishljs = "true" @save="$save"></mavon-editor>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    export default {
        name: 'editor',
        components: {
            mavonEditor
        },
        methods:{
        	$save(pos,con){
        		alert(pos)
        	}
        }
    }

</script>