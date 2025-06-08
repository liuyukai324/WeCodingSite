<template>
  <header>
    <div class="container">
      <svg width="96" height="96" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="12" width="36" height="30" rx="2" fill="none" stroke="currentColor" stroke-width="4"
              stroke-linejoin="round"/>
        <path d="M17.9497 24.0083L29.9497 24.0083" stroke="currentColor" stroke-width="4" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path d="M6 13L13 5H35L42 13" stroke="currentColor" stroke-width="4" stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>
      <span>仓库</span>
    </div>
  </header>
  <div class="projects-nav">
    <div class="container">
      <ul>
        <li :class="clicked(1)" @click="click = {id: 1, lang: 'all'}">广场</li>
        <li :class="clicked(2)" @click="click = {id: 2, lang: 'Scratch'}">Scratch</li>
        <li :class="clicked(3)" @click="click = {id: 3, lang: 'Python'}">Python</li>
        <li :class="clicked(4)" @click="click = {id: 4, lang: 'C++'}">C++</li>
        <li :class="clicked(5)" @click="click = {id: 5, lang: 'Web'}">Web</li>
        <li :class="clicked(6)" @click="click = {id: 6, lang: 'Java'}">Java</li>
        <li :class="clicked(7)" @click="click = {id: 7, lang: 'other'}">其它</li>
      </ul>
    </div>
  </div>
  <div class="projects">
    <div class="container">
      <div v-for="project in projectList" class="project">
        <div class="cover" :style="{backgroundColor: project.cover[0]}">
          <span
              :style="{
                color: project.cover[1],
                fontSize: `${project.cover[2]}px`
              }"
					>
            {{ project.name }}
          </span>
        </div>
				<div class="content">
					<span class="author">作者：{{ project.author }}</span>
					<span class="lang">语言：{{ project.lang }}</span>
				</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue"
import axios from "axios"

let projectList = ref<Array<any>>([])

// 数据
// #ffce80 #a3d8cc #74d2e7 #bff199 #ffe491 #e66c6a
let click = ref<{
	id: number,
	lang: string
}>({
	id: 1,
	lang: "all"
});
const projects = [
  {
    name: "一个没有名字的coding站",
    cover: "#ffce80",
    description: "这不是一个项目",
    author: "admin",
    lang: "ArkTS"
  },
  {
    name: "我是名字",
    cover: "#a3d8cc",
    description: "这不是一个项目",
    author: "admin",
    lang: "ArkTS"
  },
  {
    name: "test",
    cover: "#74d2e7",
    description: "这不是一个项目",
    author: "admin",
    lang: "ArkTS"
  },
  {
    name: "1234567890",
    cover: "#e66c6a",
    description: "这不是一个项目",
    author: "admin",
    lang: "ArkTS"
  },
  {
    name: "test",
    cover: "#bff199",
    description: "这不是一个项目",
    author: "admin",
    lang: "ArkTS"
  },
  {
    name: "test",
    cover: "#ffe491",
    description: "这不是一个项目",
    author: "admin",
    lang: "ArkTS"
  },
]

// 方法
function clicked(n: number) {
  if (click.value.id === n) {
    return "clicked"
  } else {
    return null
  }
}

// function textColor(color: string) {
//   const hex = color;
//   const r = parseInt(hex.slice(1, 3), 16)
//   const g = parseInt(hex.slice(3, 5), 16)
//   const b = parseInt(hex.slice(5, 7), 16)
//   const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
//   return luminance > 0.65 ? "black" : "white"
// }
//
// function textSize(title: string) {
//   const n = title.length
//   if (n <= 5) {
//     return 38
//   }
//   if (n <= 10) {
//     return 36
//   }
//   return 24
// }

async function getProjects() {
	try {
		let response = await axios({
			method: "get",
			url: `/api/getProjects/${click.value.lang}`
		})
		projectList.value = response.data
		console.log(projectList.value)
	} catch (err) {
		console.error(err)
	}
}

getProjects()
watch(click, getProjects)
</script>

<style scoped>
/* 头部 */
header .container {
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

header .container span {
  margin-left: 10px;
  font-size: 70px;
  font-weight: 600;
  cursor: default;
}

/* 筛选栏 */
.projects-nav {
  margin-top: 10px;
}

.projects-nav .container {
  display: flex;
  justify-content: center;
}

.projects-nav ul {
  display: flex;
  list-style: none;
}

.projects-nav ul li {
  display: flex;
  font-weight: 500;
  font-size: 20px;
  width: 100px;
  padding: 10px;
  background-color: white;
  margin: 10px 8px;
  cursor: pointer;
  justify-content: center;
  border-radius: 22px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.projects-nav ul li:first-child {
  margin-left: 16px;
}

.projects-nav ul li:last-child {
  margin-right: 16px;
}

.projects-nav ul li:hover {
  border: 2px solid #57DDBE;
  transform: scale(1.05);
}

.projects-nav ul li.clicked {
  background-color: #57DDBE;
  color: white;
  transform: scale(1.05);
}

.projects {
  margin-top: 30px;
}

.projects .container {
  display: grid;
  max-width: 1000px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
}

.projects .project .cover {
	border-radius: 16px;
  display: flex;
  height: 130px;
  align-items: center;
  justify-content: center;
	cursor: pointer;
	transition: all 0.2s ease;
}

.projects .project .cover span {
  font-weight: 600;
  text-align: center;
	cursor: pointer;
}

.projects .project .cover:hover {
	transform: scale(1.05);
}
.projects .project .content {
	padding: 0 8px;
	color: white;
	margin-right: 10px;
	margin-top: 10px;
	cursor: pointer;
}
.projects .project .content .author {
	display: block;
	font-size: 22px;
	font-weight: 500;
	margin-bottom: 2px;
}
.projects .project .content .lang {
	font-size: 18px;
	color: #aaa;
}

</style>