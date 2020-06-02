escape =function(str){
    var _a,_b;var _c="";
    for(i=0;i<str.length;i++){
        _a=str.charCodeAt(i)
        _b=_a<256?"%":"%u";
        _b = _a<16?"%0":_b;
        _c += _b + _a.toString(16).toUpperCase();
    }
    return _c
}
