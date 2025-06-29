import {defineStore} from "pinia"
import {ref} from "vue";
import axios from "axios";

export const useCodeStore = defineStore("Code", () => {
    const projectList = ref<Array<{
        name: string,
        cover: Array<any>,
        description: string,
        author: string,
        lang: string
    }>>([])

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
    return {projectList, getProjects}
})