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
	<div class="nav">
		<div class="container">
			<!--      <ul>-->
			<!--        <li :class="clicked(1)" @click="click = {id: 1, lang: 'all'}" @focus="console.log(121)">广场</li>-->
			<!--        <li :class="clicked(2)" @click="click = {id: 2, lang: 'Scratch'}">Scratch</li>-->
			<!--        <li :class="clicked(3)" @click="click = {id: 3, lang: 'Python'}">Python</li>-->
			<!--        <li :class="clicked(4)" @click="click = {id: 4, lang: 'C++'}">C++</li>-->
			<!--        <li :class="clicked(5)" @click="click = {id: 5, lang: 'Web'}">Web</li>-->
			<!--        <li :class="clicked(6)" @click="click = {id: 6, lang: 'Java'}">Java</li>-->
			<!--        <li :class="clicked(7)" @click="click = {id: 7, lang: 'other'}">其它</li>-->
			<!--      </ul>-->
			<div class="filter">
				<div :class="`lang ${chooseLanguage}`" @click="chooseLanguage = !chooseLanguage">
					语言
					<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M36 18L24 30L12 18" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<div :class="`option ${chooseLanguage}`">
					<div>广场</div>
					<div>Python</div>
					<div>C++/C</div>
					<div>Java</div>
					<div>Scratch</div>
					<div>JS/TS</div>
					<div>Web</div>
				</div>
			</div>
			<div class="button">
				<button class="add">
					<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M24.0605 10L24.0239 38" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M10 24L38 24" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					上传
				</button>
				<button class="manage">
					<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M24 4L18 10H10V18L4 24L10 30V38H18L24 44L30 38H38V30L44 24L38 18V10H30L24 4Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
						<path d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
					</svg>
					管理
				</button>
			</div>

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
let chooseLanguage = ref<boolean>(false)
// 数据
// #ffce80 #a3d8cc #74d2e7 #bff199 #ffe491 #e66c6a
// let click = ref<{
// 	id: number,
// 	lang: string
// }>({
// 	id: 1,
// 	lang: "all"
// });
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
// function clicked(n: number) {
// 	if (click.value.id === n) {
// 		return "clicked"
// 	} else {
// 		return null
// 	}
// }

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
			url: "/api/getProjects/all"
		})
		projectList.value = response.data
	} catch (err) {
		console.error(err)
	}
}

getProjects()
// watch(click, getProjects)

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
.nav {
	margin-top: 10px;
}

.nav .container {
	display: flex;
	justify-content: space-between;
	max-width: 1000px;
}
.nav .button {
	display: flex;
}
.nav .filter .lang,
.nav .button button {
	display: flex;
	font-weight: 500;
	font-size: 20px;
	width: 100px;
	padding: 10px 0;
	background-color: white;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	border: 2px solid transparent;
	transition: all 0.3s ease;
}
.nav .filter .lang.true {
	background-color: #57DDBE;
	color: white;
}
.nav .filter .option {
	height: 0;
	padding: 0;
	position: absolute;
	margin-top: 10px;
	background-color: white;
	width: 100px;
	border-radius: 20px;
	max-height: 200px;
	overflow: auto;
	z-index: 1;
	box-shadow: #aaaaaa 0 0 8px;
	transition: all 0.3s ease;
}
.nav .filter .option::-webkit-scrollbar {
	width: 0;
	background-color: transparent;
}
.nav .filter .option.true {
	height: 200px;
	padding: 10px;
}
.nav .filter .option div {
	margin-top: 4px;
	padding: 6px;
	cursor: pointer;
	border-radius: 10px;
	transition: all 0.2s ease;
	text-align: center;
}
.nav .filter .option div:first-child {
	margin: 0;
}
.nav .filter .option div:hover {
	background-color: #57DDBE;
	color: white;
}

.nav .button .add	{
	background-color: #57DDBE;
	color: white;
	margin-right: 16px;
}
.nav .button button:hover {
	transform: scale(1.03);
}
.nav .button .add:active,
.nav .filter .lang:active {
	background-color: #5aa395;
}
.nav .button .manage:active {
	background-color: #aaa;
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
	transform: translateY(-5px);
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