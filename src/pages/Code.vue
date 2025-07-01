<template>
  <header>
    <div class="container grid">
      <div class="title">
        <div class="name linear">代码仓库</div>
        <div class="text">寻找有趣的代码</div>
      </div>
      <div class="card glass ani-in">
        <div class="num">0<span>次</span></div>
        <div class="text">今日上传or更新</div>
      </div>
      <div class="card glass ani-in">
        <div class="num">0<span>个</span></div>
        <div class="text">个人总项目数</div>
      </div>
      <div class="card glass ani-in">
        <div class="num">0<span>个</span></div>
        <div class="text">最高获赞</div>
      </div>
    </div>
  </header>
  <div class="filter-bar ani-in">
    <div class="container glass">
      <div class="first">
        <div class="search glass ani-in">
          <div>
            <img src="@/assets/icons/search.svg" alt="搜索">
            <input value="" placeholder="在这里搜索...">
          </div>
          <button class="btn-icon">
            <img src="@/assets/icons/search.svg" alt="搜索">
          </button>
        </div>
        <div class="add btn ani-in">上传项目</div>
      </div>
      <div class="second" ref="filter">
        <div class="ani-in btn" @click="reloadFilterBar(1, '广场')">广场</div>
        <div class="ani-in btn-light" @click="reloadFilterBar(2, 'Python')">Python</div>
        <div class="ani-in btn-light" @click="reloadFilterBar(3, 'C++/C')">C++ C</div>
        <div class="ani-in btn-light" @click="reloadFilterBar(4, 'Java')">Java</div>
        <div class="ani-in btn-light" @click="reloadFilterBar(5, 'Scratch')">Scratch</div>
        <div class="ani-in btn-light" @click="reloadFilterBar(6, 'JS/TS')">JS TS</div>
        <div class="ani-in btn-light" @click="reloadFilterBar(7, 'Web')">Web</div>
      </div>
    </div>
  </div>
  <div class="projects">
    <div class="container grid" :key="aniKey">
      <div v-for="(project,index) in viewProject" class="ani-in"
           :style="{ animationDelay: `${index * 100}ms` }">
        <Project
          :name="project.name"
          :description="project.description"
          :lang="project.lang"
          :author="project.author"
          :star="999"
        />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {computed, nextTick, ref} from "vue"
import {useCodeStore} from "@/store/Code.ts"
import {storeToRefs} from "pinia"
import {useRouter} from "vue-router";
import Project from "@/components/Project.vue"
// 筛选栏
const filter = ref()
let aniKey = ref(0)
function reloadFilterBar(n: number, name: string) {
  aniKey.value++
  nextTick(() => {
    language.value = {n, name}
    filter.value.childNodes.forEach((value: Element, index: number) => {
      if (index + 1 === n) {
        value.classList.remove("btn", "btn-light")
        value.classList.add("btn")
      } else {
        value.classList.remove("btn")
        value.classList.add("btn-light")
      }
    })
  })
}

// 获取项目列表
let codeStore = useCodeStore()
let {projectList} = storeToRefs(codeStore)
// 语言
let language = ref<{
  n: number,
  name: string
}>({
  n: 1,
  name: "广场"
})

// 筛选语言函数
function getLanguages(language: string) {
  let languages = [language]
  switch (language) {
    case "广场":
      return 0
    case "C++/C":
      languages = ["C++", "C"]
      break
    case "JS/TS":
      languages = ["JS", "TS"]
      break
    default:
      languages = [language]
  }
  return languages
}
let viewProject = computed(() => {
  if (language.value.name === "广场") {
    return projectList.value
  } else {
    const lang:any = getLanguages(language.value.name)
    return projectList.value.filter(item => {
      return lang.includes(item.lang)
    })
  }
})
// watch(language, (value) => {
//   viewProject.value = filterProjects(value.name).value
// },)

const router = useRouter()

// 路由导航
function addProject() {
  router.replace({
    path: "/addProject",
  })
}

function refresh() {
  alert("想啥呢，没写好！")
}

</script>

<style scoped>
@import "@/assets/css/code.css";
</style>