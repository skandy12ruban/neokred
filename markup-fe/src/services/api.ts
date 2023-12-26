import { environment } from "../config/environment";

function postApi(url: string, payload: any): Promise<Response> {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
  return fetch(url, requestOptions).then(res=> res.json())
}

export function convertMarkupToHtml(markup: string): Promise<Response> {
  let url = environment.domain + "markup";
  return postApi(url, {
    markup: markup,
  });
}
