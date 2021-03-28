import Vue from 'vue'
import { Editor } from '@toast-ui/vue-editor'

import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/i18n/ko-kr'
Vue.component(Editor.name, Editor) // <TuiEditor />
