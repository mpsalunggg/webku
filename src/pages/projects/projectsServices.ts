import { supabase } from "@/lib/supabase"

export async function getProjectViews(slug: string): Promise<number> {
    try {
        const { data, error } = await supabase
            .from('project_views')
            .select('views')
            .eq('slug', slug)
            .single()

        if (error) {
            console.error(error)
            return 0
        }
        console.log('ini data', data)
        return data?.views ?? 0
    } catch (error) {
        console.error(error)
        return 0
    }
}

export async function incrementProjectViews(slug: string): Promise<number> {
    try {
        const { data: existing } = await supabase
            .from('project_views')
            .select('views')
            .eq('slug', slug)
            .single()

        if (existing) {
            const { data, error } = await supabase
                .from('project_views')
                .update({ views: existing.views + 1 })
                .eq('slug', slug)
                .select('views')
                .single()

            if (error) throw error
            return data?.views ?? existing.views + 1
        } else {
            const { data, error } = await supabase
                .from('project_views')
                .insert({ slug, views: 1 })
                .select('views')
                .single()

            if (error) throw error
            return data?.views ?? 1
        }
    } catch (error) {
        console.error(error)
        return 0
    }
}

export async function getAllProjectViews(): Promise<
    Array<{ slug: string; views: number }>
> {
    try {
        const { data, error } = await supabase
            .from('project_views')
            .select('slug, views')
            .order('views', { ascending: false })

        if (error) {
            console.error(error)
            return []
        }

        return data ?? []
    } catch (error) {
        console.error(error)
        return []
    }
}
