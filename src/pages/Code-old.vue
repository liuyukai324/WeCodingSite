<template>
	<header>
		<div class="container">
      <div>
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
		</div>
	</header>
	<div class="nav">
		<div class="container">
			<div class="filter">
				<div :class="`lang ${chooseLanguage}`" @click="chooseLanguage = !chooseLanguage">
					{{ language.name }}
					<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M36 18L24 30L12 18" stroke="currentColor" stroke-width="4" stroke-linecap="round"
									stroke-linejoin="round"/>
					</svg>
				</div>
				<div :class="`option ${chooseLanguage}`">
					<div @click="language={n: 1, name: '广场'}">广场</div>
					<div @click="language={n: 2, name: 'Python'}">Python</div>
					<div @click="language={n: 3, name: 'C++/C'}">C++/C</div>
					<div @click="language={n: 4, name: 'Java'}">Java</div>
					<div @click="language={n: 5, name: 'Scratch'}">Scratch</div>
					<div @click="language={n: 6, name: 'JS/TS'}">JS/TS</div>
					<div @click="language={n: 7, name: 'Web'}">Web</div>
				</div>
			</div>
			<div class="button">
				<button class="refresh" @click="refresh">
					<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
								d="M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17"
								stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M42 8V17H33" stroke="currentColor" stroke-width="4" stroke-linecap="round"
									stroke-linejoin="round"/>
					</svg>
				</button>
				<button class="add" @click="addProject">
					<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M24.0605 10L24.0239 38" stroke="currentColor" stroke-width="4" stroke-linecap="round"
									stroke-linejoin="round"/>
						<path d="M10 24L38 24" stroke="currentColor" stroke-width="4" stroke-linecap="round"
									stroke-linejoin="round"/>
					</svg>
					上传
				</button>
				<button class="manage">
					<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M24 4L18 10H10V18L4 24L10 30V38H18L24 44L30 38H38V30L44 24L38 18V10H30L24 4Z" fill="none"
									stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
						<path
								d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"
								fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
					</svg>
					管理
				</button>
			</div>

		</div>
	</div>
	<div class="projects">
		<div class="container">
			<div v-for="project in viewProject" class="project glass">
				<div class="content">
					<span class="name">{{ project.name }}</span><br>
					<span class="description">{{ project.description }}</span>
				</div>
				<ul class="tags">
					<li class="author glass">
						<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M24 20C27.866 20 31 16.866 31 13C31 9.13401 27.866 6 24 6C20.134 6 17 9.13401 17 13C17 16.866 20.134 20 24 20Z"
								fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
							<path
								d="M6 40.8V42H42V40.8C42 36.3196 42 34.0794 41.1281 32.3681C40.3611 30.8628 39.1372 29.6389 37.6319 28.8719C35.9206 28 33.6804 28 29.2 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8Z"
								fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						{{ project.author }}
					</li>
					<li class="lang glass">
						<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16 13L4 25.4322L16 37"
								stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M32 13L44 25.4322L32 37"
								stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M28 4L21 44" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
						</svg>
						{{ project.lang }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue"
import {useCodeStore} from "@/store/Code.ts"
import {storeToRefs} from "pinia"
import {useRouter} from "vue-router";

const router = useRouter()
// 获取项目列表
let codeStore = useCodeStore()
let {projectList} = storeToRefs(codeStore)
codeStore.getProjects()
let viewProject = filterProjects("广场")
// 筛选语言
let chooseLanguage = ref<boolean>(false)
let language = ref<{
	n: number,
	name: string
}>({
	n: 1,
	name: "广场"
})

function filterProjects(language: string) {
	let languages = [language]
	let viewProject = ref<Array<{
		name: string,
		cover: Array<any>,
		description: string,
		author: string,
		lang: string
	}>>([])
	switch (language) {
		case "广场":
			return projectList
		case "C++/C":
			languages = ["C++", "C"]
			break
		case "JS/TS":
			languages = ["JS", "TS"]
			break
		default:
			languages = [language]
	}
	viewProject.value = projectList.value.filter(item => {
		return languages.includes(item.lang)
	})
	return viewProject
}

watch(language, (value) => {
	chooseLanguage.value = false
	viewProject = filterProjects(value.name)
}, {deep: true})

// button点击事件
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
/* 头部 */
header .container {
  display: flex;
  justify-content: center;
}
header .container div {
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

header .container div span {
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
	font-size: 16px;
	width: 100px;
	padding: 10px 0;
	background-color: white;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	border: 2px solid transparent;
	transition: all 0.3s ease;
}

.nav .filter .lang.true {
	background-color: #57DDBE;
	color: white;
}

.nav .filter .lang svg {
	transition: all 0.3s ease;
}

.nav .filter .lang.true svg {
	transform: rotateZ(180deg);
}

.nav .filter .option {
	height: 0;
	padding: 0;
	position: absolute;
	margin-top: 10px;
	background-color: white;
	width: 100px;
	border-radius: 12px;
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
	border-radius: 8px;
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

.nav .button .add,
.nav .button .refresh {
	background-color: #57DDBE;
	color: white;
	margin-right: 16px;
}

.nav .button .refresh {
	width: 48px;
}

.nav .button button:hover {
	transform: scale(1.03);
	border: 1px solid #79DDC6;
}

.nav .button .add:active,
.nav .filter .lang:active,
.nav .filter .option div:active,
.nav .button .refresh:active {
	background-color: #79DDC6;
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
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px;
}

.projects .project {
	padding: 16px;
	border-radius: 10px;
	overflow: hidden;
}

.projects .project .content {
	color: white;
	cursor: pointer;
}

.projects .project .content .name {
	display: inline-block;
	font-size: 22px;
	font-weight: 500;
	margin-bottom: 4px;
}

.projects .project .content .description {
	font-size: 18px;
	color: #aaa;
}
.project .tags {
	display: flex;
	margin-top: 10px;
	list-style: none;
	color: white;
  flex-wrap: wrap;
}
.project .tags li {
	display: flex;
	margin-right: 16px;
	padding: 6px;
	font-size: 16px;
	font-weight: 500;
	align-items: center;
	border-radius: 10px;
}
.project .tags li:last-child {
	margin-right: 0;
}
.project .tags li svg {
	margin-right: 6px;
}
</style>