module.exports = function(htmlWebpackPlugin) {

    var HtmlWebpackPlugin = htmlWebpackPlugin.constructor;

    htmlWebpackPlugin.injectAssetsIntoHtml = function(html, assets, assetTags) {

        var body = assetTags.body.map(this.createHtmlTag);
        var head = assetTags.head.map(this.createHtmlTag);
        var bodyRegExp = /({%script%})/i;
        var headReqexp = /({%style%})/i;
        var scripts = "", __scriptNames__=[];
        
        if (htmlWebpackPlugin.options.inject === "define") {
            // body.join('').replace(/src="([^"]+)"/g, function(a, b){
            //     __scriptNames__.push(b);
            // });
            // scripts = `<script>window.__scriptNames__="${__scriptNames__}"</script>`;
            return html.replace(bodyRegExp, body.join('')).replace(headReqexp, head.join(''));

        } else {
            return HtmlWebpackPlugin.prototype.injectAssetsIntoHtml(html, assets, assetTags);
        }
    }

    return htmlWebpackPlugin;
}
