import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


public class CalculateServlet extends HttpServlet{
	private static final long serialVersionUID = 1L;
    
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
	    		
	    		if(num1 != "") {
	    			sum+=Integer.parseInt(num1);
	    		}
	    	
	    		if(num2 != "") {
	    			sum+=Integer.parseInt(num2);
	    		}
	    		
	    		
	    		PrintWriter out = response.getWriter();
	    		if(num1 != "" && num2 != "") {
	    			out.print(num1 +"+"+ num2 +"=" + sum);

	    			out.print("<br>");
	    		}
	    		
	    		if(num3 != "" && num4 !="") {
	    			multiply=Integer.parseInt(num3) * Integer.parseInt(num4);

	    			out.print(num3 +"*"+ num4 +"=" + multiply);
	    		
	    		}
    			
    		
    	
    		}
    
 
}
