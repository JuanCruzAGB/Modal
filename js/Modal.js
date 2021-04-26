// ? JuanCruzAGB repository
import Class from "../../JuanCruzAGB/js/Class.js";

// ? External repositories
import { URLServiceProvider as URL } from "../../ProvidersJS/js/URLServiceProvider.js";

/** @var {object} defaultProps Default properties. */
let defaultProps = {
    id: 'modal-1',
};

/** @var {object} defaultState Default state. */
let defaultState = {
    open: false,
    outsideClick: false,
};

/**
 * * Modal controls the modal's logic.
 * @export
 * @class Modal
 * @extends {Class}
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 */
export class Modal extends Class {
    /**
     * * Creates an instance of Modal.
     * @param {object} [props] Modal properties:
     * @param {string} [id='modal-1'] Modal primary key.
     * @param {object} [state] Modal state:
     * @param {boolean} [open=false] Modal open state.
     * @param {boolean} [outsideClick=false] Modal outside click state.
     * @memberof Modal
     */
    constructor (props = {
        id: 'modal-1',
    }, state = {
        open: false,
        outsideClick: false,
    }) {
        super({ ...defaultProps, ...props }, { ...defaultState, ...state });
        this.setHTML(`#${ this.props.id }.modal`);
        this.setButtons();
        this.checkState();
    }

    /**
     * * Check the state.
     * @memberof Modal
     */
    checkState () {
        this.checkOpenState();
        this.checkOutsideClickState();
    }

    /**
     * * Check the open state.
     * @memberof Modal
     */
    checkOpenState () {
        if (this.state.open) {
            this.open();
        } else {
            this.close();
        }
    }

    /**
     * * Check the outside close state.
     * @memberof Modal
     */
    checkOutsideClickState () {
        let instance = this;
        if (this.state.outsideClick) {
            this.html.classList.add('clicked');
            this.html.addEventListener('click', function (e) {
                if (e.target !== e.currentTarget) { return }
                window.history.pushState({}, document.title, URL.findOriginalRoute());
                instance.close();
            });
        }
    }

    /**
     * * Set the Modal close buttons
     * @memberof Modal
     */
    setButtons () {
        let instance = this;
        if (!this.buttons) {
            this.buttons = [];
        }
        if (document.querySelectorAll(`.modal-button.${ this.props.id }`).length) {
            for (const button of document.querySelectorAll(`.modal-button.${ this.props.id }`)) {
                this.buttons.push(button);
                button.addEventListener('click', function (e) {
                    instance.switch();
                });
            }
        }
    }

    /**
     * * Switch the Modal open state.
     * @memberof Modal
     */
    switch () {
        switch (this.state.open) {
            case true:
                this.close();
                break;
            case false:
                this.open();
                break;
        }
    }

    /**
     * * Open the Modal.
     * @memberof Modal
     */
    open () {
        this.setState('open', true);
        this.html.classList.add('opened');
    }

    /**
     * * Close the Modal.
     * @memberof Modal
     */
    close () {
        this.setState('open', false);
        this.html.classList.remove('opened');
    }
}

// ? Defaut export
export default Modal;