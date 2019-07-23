package com.example.platform;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.ImageView;
import android.widget.Toast;

import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.example.platform.model.Skeleton_titlebar;
import com.example.platform.network.Config;
import com.example.platform.network.NetworkUtility;
import com.squareup.picasso.NetworkPolicy;
import com.squareup.picasso.Picasso;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class SplashActivity extends Activity {
    private ImageView img;
    private Skeleton_titlebar skeletion;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        request_splash();
    }

    public void request_splash() {
        NetworkUtility networkUtility = new NetworkUtility(getApplicationContext());
        networkUtility.requestServer(Config.GET_SPLASH, null, get_splash(), networkErrorListener());
    }

    public void request_skeleton() {
        NetworkUtility networkUtility = new NetworkUtility(getApplicationContext());
        networkUtility.requestServer(Config.GET_SKELETON, null, get_skeleton(), networkErrorListener());
    }

    private void loading_image(String url){
        img = (ImageView) findViewById(R.id.splash);
        Picasso.get().setLoggingEnabled(true); //http 504
        Picasso.get().load(url).
                placeholder(R.drawable.no_image).
                //resize(1000, 1000).
                networkPolicy(NetworkPolicy.OFFLINE).
                into(img, new com.squareup.picasso.Callback() {
                    @Override
                    public void onSuccess() {
                        //sleepTask(500);
                        request_skeleton();
                    }

                    @Override
                    public void onError(Exception e) {
                        Log.e("ERROR:", "SPLASH_LOAD :" +e.getMessage());
                        request_skeleton();
                        //sleepTask(500);
                    }
                });
    }

    private Response.Listener<JSONObject> get_splash() {
        return new Response.Listener<JSONObject>() {
            public void onResponse(JSONObject response) {
                String splash_url = "http://";
                try {
                    splash_url += response.getString("src");
                } catch (JSONException e){
                    Toast.makeText(getApplicationContext(), e.getMessage(), Toast.LENGTH_SHORT).show();
                }
                finally {
                    loading_image(splash_url);
                }
            }
        };
    }

    private Response.Listener<JSONObject> get_skeleton() {
        return new Response.Listener<JSONObject>() {
            public void onResponse(JSONObject response) {

                JSONArray menus;
                try {
                    skeletion = new Skeleton_titlebar(response.getString("background"));
                    menus = response.getJSONArray("menu_info");

                    for(int i =0; i < menus.length(); i++){
                        JSONObject menu = menus.getJSONObject(i);

                        skeletion.add_menu_info(
                                menu.getString("icon_url"),
                                menu.getString("title"),
                                menu.getString("web_url"));
                    }
                } catch (JSONException e){
                    Toast.makeText(getApplicationContext(), e.getMessage(), Toast.LENGTH_SHORT).show();
                }
                finally {
                    Intent intent = new Intent(SplashActivity.this, MainActivity.class);
                    intent.putExtra("SKELETON", skeletion);

                    startActivity(intent);
                    finish();
                }
            }
        };
    }

    private Response.ErrorListener networkErrorListener() {
        return new Response.ErrorListener() {

            public void onErrorResponse(VolleyError error) {
                Toast.makeText(getApplicationContext(), error.getMessage(), Toast.LENGTH_SHORT).show();
            }
        };
    }

    public void sleepTask(int amount) {
        try {
            Thread.sleep(amount);
        } catch (InterruptedException er) {
            er.printStackTrace();
        }
    }
}
