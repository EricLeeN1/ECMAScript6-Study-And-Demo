let template = `
<ul>
<% for (let i = 0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
<% } %>
</ul>
`;

// 该模版使用<%...%>放置JavaScript代码，使用<%= %>输出JavaScript表达式

// 怎么编译这个模版字符串？

// 1、一种思路是将其转换为JavaScript表达式字符串,如下

// echo('ul');
// for (let i = 0; i < data.supplies.length; i++) {
//     echo('li');
//     echo(data.supplies[i]);
//     echo('/li');
// }
// echo('/li');

// 要想实现这种效果，在上述代码中使用正则表达式即可



let evalExpr = /<%=(.+?)%>/g;
let expr = /<%([\s\S]+?)%>/g;

template = template
    .replace(evalExpr, '`); \n echo($1); \n echo(`'))
    .replace(expr, '`); \n $1 \n echo(`');

template = 'echo(`' + template + '`);';

let script = `(function parse(data) {
    let output = "";

    function echo(html) {
        output += html;
    }
    ${template};

    return output;
)}`