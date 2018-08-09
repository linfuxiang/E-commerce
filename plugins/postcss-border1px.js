var postcss = require('postcss');
module.exports = postcss.plugin('postcss-border1px', function(opts) {
    opts = opts || {};
    opts.keepPxComment = opts.keepPxComment || 'no';
    // 传入配置相关的代码
    return function(css, result) {
        // 遍历rules
        css.walkRules(function(rule) {
            let rules = [];
            let declWillDelete = [];
            // console.log(rule.nodes)
            // 寻找border[-top|left|bottom|right]属性
            rule.nodes.forEach(function(decl, idx, _this) {
                // console.log(decl.type, decl.text);
                // 对/*no*/注释不进行编译
                if (rules.length &&
                    decl &&
                    decl.type == 'comment' &&
                    decl.text == opts.keepPxComment &&
                    _this[idx - 1] &&
                    _this[idx - 1].type == 'decl' &&
                    /^border(\-(top|left|bottom|right))?$/.test(_this[idx - 1].prop) &&
                    /^.+ .+ .+$/.test(_this[idx - 1].value)) {
                    console.log(111)
                    rules.splice(-3, 3);
                    declWillDelete.pop();
                    return;
                }

                if (!/^border(\-(top|left|bottom|right))?$/.test(decl.prop)) {
                    return;
                }
                if (!/^.+ .+ .+$/.test(decl.value)) {
                    return;
                }
                // console.log(rule.nodes)
                // 新增属性：
                // border: 0;
                rules.push({ prop: 'border', value: '0' });

                // border[-top...]: 1px solid;
                let arr = decl.prop.split('-');
                rules.push({ prop: 'border' + (arr[1] ? '-' + arr[1] : ''), value: '1px solid' });

                // border-image: svg(1px-border param(--color ${color})) 1 stretch;
                let color;
                decl.value.split(' ').forEach(function(it) {
                    if (!/\dpx/.test(it) && !/(solid)|(dashed)|(dotted)/.test(it)) {
                        color = it;
                    }
                });
                color = color || '#e4e6e7';
                rules.push({ prop: 'border-image', value: `svg(1px-border param(--color ${color})) 1 stretch` });
                declWillDelete.push(decl);
            })
            // rule.walkDecls(/^border(\-(top|left|bottom|right))?$/, function(decl) {

            // });
            // console.log(rules, declWillDelete)
            declWillDelete.forEach(function(it) {
                it.remove();
            })
            rules.forEach(function(it) {
                rule.append({ prop: it.prop, value: it.value });
            });
            // console.log(rules);
        });
        // 转化CSS 的功能代码
    };
});
// rule.walkDecls(/^border(\-(top|left|bottom|right))?$/, function(decl) {
//     if (!/^.+ .+ .+$/.test(decl.value)) {
//         return;
//     }
//     // 新增属性：
//     // border: 0;
//     rules.push({ prop: 'border', value: '0' });

//     // border[-top...]: 1px solid;
//     let arr = decl.prop.split('-');
//     rules.push({ prop: 'border' + (arr[1] ? '-' + arr[1] : ''), value: '1px solid' });

//     // border-image: svg(1px-border param(--color ${color})) 1 stretch;
//     let color;
//     decl.value.split(' ').forEach(function(it) {
//         if (!/\dpx/.test(it) && !/(solid)|(dashed)|(dotted)/.test(it)) {
//             color = it;
//         }
//     });
//     color = color || '#e4e6e7';
//     rules.push({ prop: 'border-image', value: `svg(1px-border param(--color ${color})) 1 stretch` });
//     // console.log(decl)
//     rule.nodes.forEach(function(it) {
//         console.log(it.type, it.text)
//     })
//     decl.remove(); // 删除该条属性
// });