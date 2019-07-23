package com.example.platform;


import android.app.Activity;
import android.app.DownloadManager;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;

import androidx.annotation.Nullable;

import android.os.Environment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.DownloadListener;
import android.webkit.URLUtil;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import android.widget.Toast;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.fragment.app.Fragment;

import static android.content.Context.DOWNLOAD_SERVICE;

public class WebViewFragment extends Fragment {
    private WebView webView;
    private  String URL;

    WebViewFragment(String url){
        URL = url;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable final ViewGroup container, @Nullable Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.fragement_layout, container, false);

        webView = (WebView) v.findViewById(R.id.webview);
        webView.setWebViewClient(new WebViewClient());
        WebSettings settings = webView.getSettings();


        settings.setSupportMultipleWindows(true);
        settings.setJavaScriptCanOpenWindowsAutomatically(true);
        settings.setAllowFileAccess(true);
        settings.setJavaScriptEnabled(true);
        settings.setBuiltInZoomControls(true);
        settings.setDisplayZoomControls(false);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);

        webView.setDownloadListener(new DownloadListener() {
            @Override
            public void onDownloadStart(String url, String userAgent, String contentDisposition, String mimetype, long contentLength) {

                //mimetype = "image/jpg";
                try {
                    DownloadManager.Request request = new DownloadManager.Request(Uri.parse(url));

                    request.setDescription("Download file...");

                    //Log.e("ERRRRR",MimeTypeMap.getFileExtensionFromUrl(url) +"123456");

                    request.setTitle(URLUtil.guessFileName(url, contentDisposition, mimetype));
                    request.allowScanningByMediaScanner();
                    request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED); //Notify client once download is completed!
                    request.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, URLUtil.guessFileName(url, contentDisposition, mimetype));
                    DownloadManager dm = (DownloadManager) getContext().getSystemService(DOWNLOAD_SERVICE);
                    dm.enqueue(request);
                    Log.e("ERRRRRRRRRRRRR : ", mimetype + "HERE");

                    Toast.makeText(getContext(), "Downloading File", Toast.LENGTH_LONG).show();
                } catch (Exception e) {

                    if (ContextCompat.checkSelfPermission(getContext(),
                            android.Manifest.permission.WRITE_EXTERNAL_STORAGE)
                            != PackageManager.PERMISSION_GRANTED) {                                                      //1. if no permission
                        if (ActivityCompat.shouldShowRequestPermissionRationale(((MainActivity)getActivity()),
                                android.Manifest.permission.WRITE_EXTERNAL_STORAGE)) {                                   //3. if user click deny, re-requestPermission
                            Toast.makeText(getContext(), "첨부파일 다운로드를 위해\n동의가 필요합니다.", Toast.LENGTH_LONG).show();
                            ActivityCompat.requestPermissions(((MainActivity)getActivity()), new String[]{android.Manifest.permission.WRITE_EXTERNAL_STORAGE},
                                    110);
                        } else {                                                                                          // 2.first requestPermission : yes or no
                            Toast.makeText(getContext(), "첨부파일 다운로드를 위해\n동의가 필요합니다.", Toast.LENGTH_LONG).show();
                            ActivityCompat.requestPermissions(((MainActivity)getActivity()), new String[]{android.Manifest.permission.WRITE_EXTERNAL_STORAGE},
                                    110);
                        }
                    }
                }
            }
        });

        webView.loadUrl(URL);

        return v;
    }
}
