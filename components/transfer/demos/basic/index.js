export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

const data = [
    {label: '主机名0', key: 0},
    {label: '主机名1', key: 1, disabled: true},
    {label: '主机名2', key: 2},
    {label: '主机名3', key: 3, disabled: true},
    {label: '主机名4', key: 4},
];
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: data,
            value: [
                data[0],
                data[1]
            ]
        }
    }
}