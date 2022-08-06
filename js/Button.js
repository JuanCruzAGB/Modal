// ? JuanCruzAGB repository
import Class from '@juancruzagb/src';

/**
 * * Button controls the tab button.
 * @export
 * @class Button
 * @extends {Class}
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 */
export class Button extends Class {
    /**
     * * Creates an instance of Button.
     * @param {object} [data]
     * @param {HTMLElement} [data.html]
     * @param {object} [data.props]
     * @param {string} [data.props.id='button-1'] Button primary key.
     * @param {Modal} [data.Modal]
     * @memberof Button
     */
    constructor (data = {
        html,
        props: {
            id: 'button-1',
        },
        Modal,
    }) {
        super({
            props: {
                ...Button.props(),
                ...(data && data.hasOwnProperty("props")) ? data.props : {},
            },
        });

        this.setHTMLs([ data.html, ], data.Modal);
    }

    /**
     * * Set the Button HTML Elements.
     * @param {HTMLElement[]} htmls
     * @param {Modal} Modal Button Modal parent.
     * @memberof Button
     */
    setHTMLs (htmls = [], Modal) {
        if (!this.htmls) this.htmls = [];

        for (const html of htmls) {
            html.addEventListener('click', event => {
                Modal.switch();
            });

            this.htmls.push(html);
        }
    }

    /**
     * * Default properties.
     * @static
     * @returns {object}
     */
    static props () {
        return {
            id: 'button-1',
        };
    }
}

/**
 * * Controls the Button methods.
 * @export
 * @class Methods
 * @author JuanCruzAGB <juan.cruz.armentia@gmail.com>
 */
export default class Methods {
    /**
     * * Creates an instance of Methods.
     * @memberof Methods
     */
    constructor () {
        this.list = [];
    }

    /**
     * * Add a Button.
     * @param {array|object} data
     * @param {Modal} [Modal=false]
     * @throws {Error}
     * @returns
     * @memberof Methods
     */
    add (btn, Modal = false) {
        if (Modal) this.Modal = Modal;

        if (!btn) throw new Error('Button is required');

        if (Array.isArray(btn) || btn instanceof NodeList) {
            for (const btnInside of btn) this.add(btnInside);

            return;
        }

        this.list.push(new Button({
            html: btn,
            props: {
                id: `button-${ this.list.length + 1 }`,
            },
            Modal: this.Modal,
        }));
    }

    /**
     * * Returns a Button.
     * @param {string} target
     * @throws {Error}
     * @returns {array}
     * @memberof Methods
     */
    get (target) {
        console.warn('Get Modal Button is not supported yet');
    }

    /**
     * * Check if there is a Button.
     * @param {array|string} target
     * @throws {Error}
     * @returns {boolean}
     * @memberof Methods
     */
    has (target) {
        console.warn('Has Modal Button is not supported yet');
    }

    /**
     * * Remove a Button.
     * @param {string} name
     * @throws {Error}
     * @memberof Methods
     */
    remove (name) {
        console.warn('Remove Modal Button is not supported yet');
    }
}