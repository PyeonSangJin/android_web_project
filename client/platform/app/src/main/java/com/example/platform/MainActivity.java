package com.example.platform;

import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.ImageView;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.example.platform.model.Skeleton_titlebar;
import com.example.platform.tabPager.CustomViewPager;
import com.example.platform.tabPager.PagerAdapter;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.squareup.picasso.Picasso;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private CustomViewPager viewPager;
    private BottomNavigationView navigationView;
    private List<Skeleton_titlebar.Menu_info> menuInfos;
    private List<ImageView> icons;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_view);

        Intent intent = getIntent();
        Skeleton_titlebar data = (Skeleton_titlebar) intent.getSerializableExtra("SKELETON");

        menuInfos = data.getMenu_info();
        icons = new ArrayList<>();
        new StringTask().execute();
    }

    class StringTask extends AsyncTask<Void, String, Void> {
        @Override
        protected Void doInBackground(Void... voids) {
            setupViewPager();
            return null;
        }

        @Override
        protected void onPostExecute(Void aVoid) {
            displayMenu();
        }
    }

    private void setupViewPager() {
        viewPager = (CustomViewPager) findViewById(R.id.viewpager);
        viewPager.setPagingEnabled(false);

        PagerAdapter adapter = new PagerAdapter(getSupportFragmentManager());

        for (int i = 0; i < menuInfos.size(); i++) {
            adapter.addFragment(new WebViewFragment(menuInfos.get(i).getWeb_url()));
        }
        viewPager.setAdapter(adapter);
    }

    private void displayMenu() {
        navigationView = (BottomNavigationView) findViewById(R.id.navigation);
        final Menu menu = navigationView.getMenu();

        for (int i = 0; i < menuInfos.size(); i++) {
            ImageView iv = new ImageView(this);
            Picasso.get().load(menuInfos.get(i).getIcon_url()).into(iv);
            menu.add(menuInfos.get(i).getTitle()).
                    setIcon(iv.getDrawable()); //이미지 수정 해야함

            //Log.e("ASDFASDF",iv.toString());
            //icons.add(iv);
        }

        navigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem menuItem) {

                for (int i = 0; i < navigationView.getMenu().size(); i++) { //최적화 필요
                    if (menuItem == navigationView.getMenu().getItem(i)) {
                        viewPager.setCurrentItem(i);
                        return true;
                    }
                }
                return false;
            }
        });
    }
}