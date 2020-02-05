

//newFunc();
var a = {
    f: newFunc
}
a.f();
var b = a.f.bind(this);
b();