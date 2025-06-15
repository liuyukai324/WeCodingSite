<template>
	<div class="container">
		<div class="return">
			<button @click="ret">
				<svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.79889 24H41.7989" stroke="currentColor" stroke-width="4" stroke-linecap="round"
								stroke-linejoin="round"/>
					<path d="M17.7988 36L5.79883 24L17.7988 12"
								stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				返回
			</button>
		</div>
		<div class="page-content">
			<div class="view">
				<div class="content">
					<span class="name">name</span><br>
					<span class="description">description</span>
				</div>
				<ul class="tags">
					<li class="author">
						<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
									d="M24 20C27.866 20 31 16.866 31 13C31 9.13401 27.866 6 24 6C20.134 6 17 9.13401 17 13C17 16.866 20.134 20 24 20Z"
									fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
							<path
									d="M6 40.8V42H42V40.8C42 36.3196 42 34.0794 41.1281 32.3681C40.3611 30.8628 39.1372 29.6389 37.6319 28.8719C35.9206 28 33.6804 28 29.2 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8Z"
									fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						author
					</li>
					<li class="lang">
						<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16 13L4 25.4322L16 37"
										stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M32 13L44 25.4322L32 37"
										stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M28 4L21 44" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
						</svg>
						lang
					</li>
				</ul>
			</div>
			<div class="form">
				<form action="javascript:">

				</form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router"
const router = useRouter()

function ret() {
	router.replace({
		path: "/code"
	})
}
</script>

<style scoped>
/* 返回按钮 */
.return button {
	display: flex;
	border: none;
	background-color: transparent;
	color: white;
	font-size: 24px;
	align-items: center;
	margin: 20px;
}

.return button svg {
	margin-right: 10px;
}

.return button:hover {
	color: #57DDBE;
}

.return button:active {
	color: #5aa395;
}


/* 内容区 */
.page-content {
	display: flex;
}
/* 预览 */
.view {
	max-width: 320px;
	padding: 16px;
	backdrop-filter: blur(10px);
	border-radius: 10px;
	overflow: hidden;
	background: rgba(255, 255, 255, 0.1);
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
	border: 1px solid rgba(255, 255, 255, 0.3);
}
.view .content {
	color: white;
	cursor: pointer;
}

.view .content .name {
	display: inline-block;
	font-size: 22px;
	font-weight: 500;
	margin-bottom: 4px;
}

.view .content .description {
	font-size: 18px;
	color: #aaa;
}
.view .tags {
	display: flex;
	margin-top: 10px;
	list-style: none;
	color: white;
}
.view .tags li {
	display: flex;
	margin-right: 16px;
	padding: 6px;
	font-size: 16px;
	font-weight: 500;
	align-items: center;
	background: rgba(255, 255, 255, 0.1);
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.3);
}
.view .tags li:last-child {
	margin-right: 0;
}
.view .tags li svg {
	margin-right: 6px;
}
</style>