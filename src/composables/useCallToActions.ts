import { ref, type Ref } from "vue";
import { usePages } from "./usePages";
import type { Page } from "@/types/Page";

const { api: { getPageByID } } = usePages()

export const useCallToActions = () => {
    const slug = ref('')
    const title: Ref<string | false> = ref(false)
    const sub_title: Ref<string | false> = ref(false)
    const button_label: Ref<string | false> = ref(false)

    const fetchSlug = async (id: number) => {
        const page = await getPageByID(id)
        slug.value = page.slug
    }

    const format = (page: Page) => {
        title.value = page.acf.call_to_action_title ?? false
        sub_title.value = page.acf.call_to_action_sub_title ?? false
        button_label.value = page.acf.call_to_action_button_label ?? false
    }

    return {
        format, fetchSlug, slug, title, sub_title, button_label
    }
}