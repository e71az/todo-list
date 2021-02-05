function html(template, ...values) {
  return template.reduce(
    (html, string) => html.trim() + string.trim() + (values.shift() || ""),
    ""
  );
}

export default html;
