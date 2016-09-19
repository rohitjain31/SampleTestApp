using System;
using System.Web.Optimization;


namespace TestAppStartUp
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.

            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //            "~/Scripts/Library/modernizr-*"));

            //Library Scripts
            bundles.Add(new ScriptBundle("~/bundles/library").Include(
                "~/Scripts/Library/jQuery/jquery-{version}.js",
                "~/Scripts/Library/jQuery/jquery.validate*",
                "~/Scripts/Library/bootstrap/bootstrap.min.js",
                "~/Scripts/Library/angular/angular.min.js",
                "~/Scripts/Library/angular/angular-sanitize.min.js",
                "~/Scripts/Library/angular/angular-ui-router.min.js",
                "~/Scripts/Library/angular/angular-animate.min.js",
                "~/Scripts/Library/underscore/underscore.min.js",
                "~/Scripts/Library/jQuery/jquery-ui.js",
                "~/Scripts/Library/Adal/adal.js",
                "~/Scripts/Library/Adal/adal-angular.js",
                "~/Scripts/Library/angular/ng-infinite-scroll.min.js"
                ));

            //Application Scripts

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                //Module
                "~/Scripts/App/module.js",
                "~/Scripts/App/config.js"
                ));



            //Style
            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/Css/style.css", "~/Content/jquery-ui.css"));
            
        }
    }
}