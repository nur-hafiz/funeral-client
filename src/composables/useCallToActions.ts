import { ref, type Ref } from "vue";
import { usePages } from "./usePages";
import type { Page } from "@/types/Page";

const { api: { getPageByID } } = usePages()

export const useCallToActions = () => {
    const slug = ref('')
    const title: Ref<string> = ref('')
    const sub_title: Ref<string> = ref('')
    const button_label: Ref<string> = ref('')

    const fetchSlug = async (id: number) => {
        if (id) {
            const page = await getPageByID(id)
            slug.value = page.slug
        }
    }

    const reassignIfNotEmpty = (str: string, current: string) => {
        return str.length ? str : current
    }
    
    const update = (page: Page) => {
        if (page.acf) {
            title.value = reassignIfNotEmpty(page.acf.call_to_action_title, title.value) 
            sub_title.value = reassignIfNotEmpty(page.acf.call_to_action_sub_title, sub_title.value)
            button_label.value = reassignIfNotEmpty(page.acf.call_to_action_button_label, button_label.value)
            fetchSlug(page.acf.call_to_action_link)
        }
    }

    return {
        update, slug, title, sub_title, button_label
    }
}