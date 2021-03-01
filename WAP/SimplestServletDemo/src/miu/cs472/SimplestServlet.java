package miu.cs472;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class SimplestServlet
 */
//@WebServlet("/Simplest")
public class SimplestServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SimplestServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    		throws ServletException, IOException {
    		PrintWriter out = response.getWriter();
    		out.print("<html><head><title>Test</title></head><body>");
    		out.print("<form method='post'>");
    		out.print("<p>Please click the button</p>");
    		out.print("<input type='submit' value='Click me'/>");
    		out.print("</form>");
    		out.print("</body></html>");
    		}
    
   protected void doPost(HttpServletRequest request, HttpServletResponse response)
    		throws ServletException, IOException {
    		PrintWriter out = response.getWriter();
    		out.print("<html><head><title>Test</title></head><body>");
    		out.print("<p>Postback received</p>");
    		out.print("</body></html>");
    		}

}
