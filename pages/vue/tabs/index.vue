<template>
    <div>
        <Tabs :data="data" />
        <Tabs v-model="tab">
            <Tab value="rulein">入站规则</Tab>
            <Tab value="ruleout">出站规则</Tab>
            <Tab value="relatedVM">关联云主机</Tab>
        </Tabs>
    </div>
</template>

<script>
import Tabs, {Tab} from 'components/tabs';

export default {
    data() {
        return {
            data: [
                {
                    text: '入站规则',
                    value: 'rulein',
                },
                {
                    text: '出站规则',
                    value: 'ruleout',
                },
                {
                    text: '关联云主机',
                    value: 'relatedVM',
                }
            ],
            tab: '',
        }
    },

    components: {
        Tabs, Tab
    },
}
</script>
