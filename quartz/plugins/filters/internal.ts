import { QuartzFilterPlugin } from "../types";

export const RemoveInternals: QuartzFilterPlugin<{}> = () => ({
    name: "RemoveInternals",
    shouldPublish(_ctx, [_tree, vfile]) {
        const internalFlag: boolean = 
            vfile.data?.frontmatter?.internal === true || vfile.data?.frontmatter?.internal === "true"
        return !internalFlag
    },
})