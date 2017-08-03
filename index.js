import {
    isFunction
} from 'js-is-type';

export default function wrap(target, name, wrapper) {
    if (!target) {
        return;
    }
    if (!wrapper) {
        return;
    }
    if (!isFunction(wrapper)) {
        return;
    }
    var original = target[name];
    if (original && original._wrapped) {
        return;
    }
    var wrapped = wrapper(original);
    wrapped && (wrapped._wrapped = true);
    target[name] = wrapped;
    return wrapped;
}