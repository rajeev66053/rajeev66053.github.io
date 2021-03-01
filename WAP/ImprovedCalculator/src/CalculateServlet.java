import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class CalculateServlet extends HttpServlet {
	/**
     * @see HttpServlet#HttpServlet()
     */
    public CalculateServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    		throws ServletException, IOException {
    	
	    		String num1 = request.getParameter("num1");
	    		String num2 = request.getParameter("num2");
	    		String num3 = request.getParameter("num3");
	    		String num4 = request.getParameter("num4");
	    		int sum = 0;
	    		int multiply = 0;
	    		
	    		PrintWriter out = response.getWriter();
	    		out.print("<html><head><title>Test</title></head><body>");
	    		out.print("<form action='calculate'>");
	    		
	    		if(num1 != "") {
	    			sum+=Integer.parseInt(num1);
	    			out.print("<input type='text' name='num1' value='"+num1+"'>+");
	    		}else {
	    			out.print("<input type='text' name='num1' value=''>+");
	    		}
	    	
	    		if(num2 != "") {
	    			sum+=Integer.parseInt(num2);
	    			out.print("<input type='text' name='num2' value='"+num2+"'>=");
	    		}else {
	    			out.print("<input type='text' name='num2' value=''>=");
	    		}
	    		
	    		if(num1 != "" && num2 != "") {
	    			out.print("<input type='text' name='sum' value='"+sum+"'><br>");
	    		}else{
	    			out.print("<input type='text' name='sum' value=''><br>");	    			
	    		}
    
			    if(num3 != "") {
					out.print("<input type='text' name='num3' value='"+num3+"'>*");
				}else {
					out.print("<input type='text' name='num3' value=''>*");
				}

				if(num4 != "") {
					out.print("<input type='text' name='num4' value='"+num4+"'>=");
				}else {
					out.print("<input type='text' name='num4' value=''>=");
				}

	    		
	    		if(num3 != "" && num4 !="") {
	    			multiply=Integer.parseInt(num3) * Integer.parseInt(num4);
	    			out.print("<input type='text' name='multiply' value='"+multiply+"'><br>");	    		
	    		}else {
	    			out.print("<input type='text' name='multiply' value=''><br>");
	    		}
	    		
	    		out.print("<input type='submit' value='Submit'>");
	    		out.print("</form>");
	    		out.print("</body></html>"); 			
	    		
    		}
    
}
