// ? JuanCruzAGB repository
import Class from "../../JuanCruzAGB/js/Class.js";

// ? External repositories
import { URLServiceProvider as URL } from "../../ProvidersJS/js/URLServiceProvider.js";

/**
 * * Modal controls the modal"s logic.
 * @export
 * @class Modal
 * @extends {Class}
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 */
export class Modal extends Class {
    /**
     * * Creates an instance of Modal.
     * @param {object} [props] Modal properties:
     * @param {string} [id="modal-1"] Modal primary key.
     * @param {object} [state] Modal state:
     * @param {boolean} [detectHash=false] Modal detect the hash state.
     * @param {boolean} [open=false] Modal open state.
     * @param {boolean} [outsideClick=false] Modal outside click state.
     * @param {object} [callbacks] Modal callbacks:
     * @param {object} [callbacks.open] Modal open callback:
     * @param {function} [callbacks.open.function] Modal open callback function.
     * @param {*} [callbacks.open.params] Modal open callback function params.
     * @param {object} [callbacks.close] Modal close callback:
     * @param {function} [callbacks.close.function] Modal close callback function.
     * @param {*} [callbacks.close.params] Modal close callback function params.
     * @memberof Modal
     */
    constructor (props = {
        id: "modal-1",
    }, state = {
        detectHash: false,
        open: false,
        outsideClick: false,
    }, callbacks = {
        open: {
            function: function (params) { /* console.log("open") */ },
            params: {},
    }, close: {
            function: function (params) { /* console.log("open") */ },
            params: {},
    }}) {
        super({ ...Modal.props, ...props }, { ...Modal.state, ...state });
        this.setCallbacks({  ...Modal.callbacks, ...callbacks });
        this.setHTML(`#${ this.props.id }.modal`);
        this.setButtons();
        this.checkState();
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
                button.addEventListener("click", function (e) {
                    instance.switch();
                });
            }
        }
    }

    /**
     * * Check the state.
     * @memberof Modal
     */
    checkState () {
        this.checkDetectHashState();
        this.checkOpenState();
        this.checkOutsideClickState();
    }

    /**
     * * Check the detect hash state.
     * @memberof Modal
     */
    checkDetectHashState () {
        if (this.state.detectHash) {
            if (URL.findHashParameter() == this.props.id) {
                this.state.open = true;
            }
            window.addEventListener("hashchange", (e) => {
                if (URL.findHashParameter() == this.props.id && !this.state.open) {
                    this.open();
                }
                if (URL.findHashParameter() != this.props.id && this.state.open) {
                    this.close();
                }
            });
        }
    }

    /**
     * * Check the open state.
     * @memberof Modal
     */
    checkOpenState () {
        if (this.state.open) {
            this.open();
        }
        if (!this.state.open) {
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
            this.html.classList.add("clicked");
            this.html.addEventListener("click", function (e) {
                if (e.target !== e.currentTarget) { return }
                window.history.pushState({}, document.title, URL.findOriginalRoute());
                instance.close();
            });
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
    open (params = {}) {
        this.setState("open", true);
        if (!this.html.classList.contains("opened")) {
            this.execute("open", {
                ModalJS: this,
                ...params,
            });
            this.html.classList.add("opened");
        }
    }

    /**
     * * Close the Modal.
     * @memberof Modal
     */
    close (params = {}) {
        this.setState("open", false);
        if (this.html.classList.contains("opened")) {
            this.execute("close", {
                ModalJS: this,
                ...params,
            });
            this.html.classList.remove("opened");
        }
    }

    /** 
     * @static
     * @var {object} props Default properties.
     */
    static props = {
        id: "modal-1",
    }
    
    /** 
     * @static
     * @var {object} state Default state.
     */
    static state = {
        detectHash: false,
        open: false,
        outsideClick: false,
    }
    
    /** 
     * @static
     * @var {object} callbacks Default callbacks.
     */
    static callbacks = {
        open: {
            function: function (params) { /* console.log("open") */ },
            params: {},
    }, close: {
            function: function (params) { /* console.log("open") */ },
            params: {},
    }}
}

// ? Defaut export
export default Modal;