import template from './index.vdt'
import './index.styl'
import Intact from 'intact'

export default class extends Intact{
    get template() { return template; }

    defaults() {
        return {
            total: 0,
            current: 1,
            size: 10,
            showTotal: true,
            opts: [
                {text:'10行', value: 10},
                {text:'20行', value: 20},
                {text:'50行', value: 50},
            ],
            value: '',
            Goto: false
        };
    }

    _init() {
        if (this.get('current') > this.get('total')) {
            this.set('current', 1);
        }
    }

    changePage(page) {
        if (this.get('current') !== page) {
            this.set('current', page);
        }
    }

    prev() {
        let current = this.get('current');
        if (current <= 1) {
            return false;
        }
        this.changePage(current - 1);
    }

    next() {
        let current = this.get('current');
        let total = this.get('total');
        if (current >= total) {
            return false;
        }
        this.changePage(current + 1);
    }

    fastPrev() {
        const page = this.get('current') - 5;
        if (page > 0) {
            this.changePage(page);
        } else {
            this.changePage(1);
        }
    }

    fastNext() {
        const page = this.get('current') + 5;
        let total = this.get('total');
        if (page > total) {
            this.changePage(total);
        } else {
            this.changePage(page);
        }
    }

    _goto() {
        const self = this;
        const regu = /^[1-9]\d*$/;
        let value = parseInt(self.get('value'));
        let total = self.get('total');
        let size = self.get('size');
        let page = value;
        let totalPages = Math.ceil(total / size)

        if (regu.test(value)) {
            if (value <= 1) {
                page = 1;
            } else if (value > totalPages) {
                page = totalPages;
            }
            self.set('value', page);
            self.changePage(page);
        }
    }
}
