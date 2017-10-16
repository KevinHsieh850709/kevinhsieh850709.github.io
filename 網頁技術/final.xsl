<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" />
<xsl:template match="/">
<html>
<head>
	
	<title>S0322033_FinalWork</title>
	<script type="text/x-mathjax-config">
	MathJax.Hub.Config({
		tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]}
	});
	</script>
	<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML-full"></script>

</head>
<body>
<div style="margin-top:5%;margin-left:30%;width:40%;">
<h3><xsl:value-of select="國民中學/考卷/標題"/></h3>
<h3><xsl:value-of select="國民中學/考卷/一大題"/></h3>

<xsl:for-each select="國民中學/考卷/填充題/題目">
<p><xsl:value-of select="描述"/></p>
<p><xsl:value-of select="選項1"/></p>
<p><xsl:value-of select="選項2"/></p>
<p><xsl:value-of select="選項3"/></p>
<p><xsl:value-of select="選項4"/></p>
<img src="{圖}"/>
</xsl:for-each>

<br/>
<h3><xsl:value-of select="國民中學/考卷/二大題"/></h3>
<xsl:for-each select="國民中學/考卷/計算題/題目">
<p><xsl:value-of select="描述"/></p>
<ul style="list-style: none;">
  <li><xsl:value-of select="選項1"/></li>
  <li><xsl:value-of select="選項2"/></li>
</ul>
<br/><br/><br/>
</xsl:for-each>
</div>

</body>
</html>
</xsl:template>
</xsl:stylesheet> 